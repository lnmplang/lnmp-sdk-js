const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CORE_REPO_URL = 'https://github.com/lnmplang/lnmp-protocol.git';
const CACHE_DIR = path.resolve(__dirname, '../.cache');
const CORE_REPO_DIR = path.join(CACHE_DIR, 'core-repo');
const TARGET_WASM_DIR = path.resolve(__dirname, '../src/wasm');

function run(command, cwd) {
    console.log(`Running: ${command} in ${cwd || process.cwd()}`);
    execSync(command, { stdio: 'inherit', cwd });
}

async function main() {
    try {
        console.log('--- Starting WASM Build ---');

        // 1. Ensure cache directory exists
        if (!fs.existsSync(CACHE_DIR)) {
            fs.mkdirSync(CACHE_DIR, { recursive: true });
        }

        // 2. Clone or Update Core Repo
        // 2. Clone or Update Core Repo
        let shouldClone = true;

        if (fs.existsSync(CORE_REPO_DIR)) {
            const gitDir = path.join(CORE_REPO_DIR, '.git');
            if (fs.existsSync(gitDir)) {
                // Verify remote URL matches
                try {
                    // We need to use execSync directly to capture output silently or just run verify
                    const remoteUrl = execSync('git remote get-url origin', { cwd: CORE_REPO_DIR }).toString().trim();
                    if (remoteUrl === CORE_REPO_URL) {
                        shouldClone = false;
                        console.log('Core repo found and valid. Updating...');
                        try {
                            run('git fetch origin && git reset --hard origin/main', CORE_REPO_DIR);
                        } catch (e) {
                            console.log('Failed to reset to main, trying master...');
                            run('git fetch origin && git reset --hard origin/master', CORE_REPO_DIR);
                        }
                    } else {
                        console.log(`Core repo remote mismatch (found ${remoteUrl}, expected ${CORE_REPO_URL}). Re-cloning...`);
                    }
                } catch (e) {
                    console.log('Failed to check remote URL. Re-cloning...');
                }
            } else {
                console.log('Core repo directory exists but is not a git repo. Re-cloning...');
            }
        }

        if (shouldClone) {
            console.log('Cloning core repo...');
            if (fs.existsSync(CORE_REPO_DIR)) {
                fs.rmSync(CORE_REPO_DIR, { recursive: true, force: true });
            }
            run(`git clone ${CORE_REPO_URL} core-repo`, CACHE_DIR);
        }

        // 3. Build WASM
        console.log('Building WASM...');
        // We need to point to the crate inside the cloned repo. 
        // Based on analysis, the crate is likely at root or crates/lnmp. 
        // The previous relative path was ../../../crates/lnmp, so it's likely in crates/lnmp.
        const cratePath = path.join(CORE_REPO_DIR, 'crates/lnmp');

        // Ensure the crate path exists
        if (!fs.existsSync(cratePath)) {
            throw new Error(`Crate not found at ${cratePath}`);
        }

        // Run wasm-pack
        // Target is nodejs
        // Out dir must be the absolute path to packages/wasm-bindings/wasm
        run(`wasm-pack build --target nodejs --out-dir ${TARGET_WASM_DIR} --features wasm`, cratePath);

        console.log('--- WASM Build Completed Successfully ---');

    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
}

main();
