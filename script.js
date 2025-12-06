function startSimulation() {
    const phoneInput = document.getElementById('phoneNumber');
    const btn = document.getElementById('startBtn');

    if (!phoneInput.value) {
        log("ERROR: Please enter a valid mobile number.", "error");
        return;
    }

    // Lock Interface
    const number = phoneInput.value;
    btn.disabled = true;
    phoneInput.disabled = true;

    // Reset State
    resetNodes();

    // Start Workflow
    runScenario(number);
}

async function runScenario(number) {
    log(`INITIALIZING RECYCLING PROTOCOL FOR: ${number}`, "system");

    // Step 1: Telecom
    await wait(800);
    activateNode('node-telecom', 'Processing Request...');
    log(">> CONNECTING TO TELECOM PROVIDER...", "process");

    await wait(1500);
    updateNodeStatus('node-telecom', 'Request Forwarded');
    log(">> TELECOM: RECYCLING REQUEST AUTHORIZED.", "success");
    animatePacket('conn-1');

    // Step 2: SNRS Core
    await wait(1000);
    activateNode('node-snrs', 'Scanning Databases...');
    log(">> SNRS CORE: RECEIVING METADATA...", "process");

    await wait(1500);
    log(">> SNRS CORE: IDENTIFIED 3 LINKED ACCOUNTS.", "info");
    updateNodeStatus('node-snrs', 'Broadcasting Wipe Signal');

    // Step 3: Apps Parallel Processing
    const p1 = processApp('app-messaging', 'conn-2', "WHATSAPP_DB", 2000);
    const p2 = processApp('app-banking', 'conn-3', "HDFC_BANK_API", 3500);
    const p3 = processApp('app-social', 'conn-4', "FACEBOOK_ID", 2500);

    await Promise.all([p1, p2, p3]);

    // Final
    await wait(1000);
    activateNode('node-snrs', 'VERIFIED');
    document.getElementById('node-snrs').classList.add('success');
    log(">> SNRS CORE: ALL EXTERNAL LINKS PURGED.", "success");

    await wait(500);
    log(`>> SUCCESS: NUMBER ${number} IS NOW CLEAN AND READY FOR REASSIGNMENT.`, "success");

    document.getElementById('startBtn').innerHTML = "RECYCLE COMPLETE";
    document.getElementById('system-status').innerText = "SYSTEM IDLE";
    document.getElementById('system-status').style.borderColor = "var(--success)";
    document.getElementById('system-status').style.color = "var(--success)";

    // Unlock after delay
    setTimeout(() => {
        document.getElementById('startBtn').disabled = false;
        document.getElementById('startBtn').innerHTML = '<span class="btn-text">EXECUTE WIPE</span><div class="btn-glitch"></div>';
        phoneInput.disabled = false;
        phoneInput.value = '';
    }, 5000);
}

async function processApp(nodeId, connId, appName, duration) {
    animatePacket(connId);
    await wait(500);
    activateNode(nodeId, 'Wiping Data...');
    log(`>> CONTACTING ${appName}...`, "process");

    await wait(duration);
    updateNodeStatus(nodeId, 'Clean');
    document.getElementById(nodeId).classList.add('success');
    log(`>> ${appName}: USER DATA DELETED. DETACHMENT CONFIRMED.`, "success");
}

function log(msg, type) {
    const terminal = document.getElementById('consoleLog');
    const line = document.createElement('div');
    line.className = `log-line ${type}`;
    line.innerText = msg;
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
}

function activateNode(id, statusText) {
    const node = document.getElementById(id);
    node.classList.add('active');
    node.querySelector('.status').innerText = statusText;
}

function updateNodeStatus(id, statusText) {
    const node = document.getElementById(id);
    node.querySelector('.status').innerText = statusText;
}

function resetNodes() {
    const nodes = document.querySelectorAll('.node');
    nodes.forEach(n => {
        n.classList.remove('active', 'success');
        n.querySelector('.status').innerText = "Waiting";
    });
    document.getElementById('consoleLog').innerHTML = '';
    log(">> SYSTEM READY.", "system");
}

function animatePacket(connId) {
    // CSS-based animation trigger could go here, 
    // or we just rely on visual delays for now in this simple version
    // Future enhancement: Add moving dot via JS
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
