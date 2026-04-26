function openAuth(role) {
  localStorage.setItem("cheshireRole", role);

  const roleText = document.getElementById("roleText");
  const authModal = document.getElementById("authModal");

  roleText.textContent =
    role === "patient" ? "Patient login selected" : "Caregiver login selected";

  authModal.classList.add("show");
}

function verifyIdentity() {
  const authModal = document.getElementById("authModal");

  authModal.innerHTML = `
    <h2>Verifying identity...</h2>
    <div class="loader-ring"></div>
  `;

  setTimeout(() => {
    const role = localStorage.getItem("cheshireRole");

    if (role === "caregiver") {
      window.location.href = "caregiver.html";
    } else {
      window.location.href = "consent.html";
    }
  }, 1000);
}

function showWaveform() {
  const waveform = document.getElementById("waveform");

  if (waveform) {
    waveform.classList.remove("hidden");
  }
}

function toggleConsent() {
  const checked = document.getElementById("consentCheck").checked;
  const btn = document.getElementById("continueConsent");

  if (checked) {
    btn.classList.remove("disabled");
    btn.href = "index.html";
  } else {
    btn.classList.add("disabled");
    btn.href = "#";
  }
}

function captureSamples() {
  let count = 1;
  const countdown = document.getElementById("countdown");

  const interval = setInterval(() => {
    if (count <= 5) {
      const sample = document.getElementById("s" + count);

      sample.classList.add("captured");
      sample.textContent = "Sample " + count + ": Captured";
      countdown.textContent = "Captured sample " + count;

      count++;
    } else {
      clearInterval(interval);
      countdown.textContent = "Model ready";
    }
  }, 250);
}

function gestureDetected() {
  window.location.href = "confirm.html";
}

function speakOutput() {
  const phraseElement = document.querySelector(".speak-text");
  let text = phraseElement ? phraseElement.innerText : "I'm hungry.";

  text = text.replace(/[“”]/g, "");

  const speech = new SpeechSynthesisUtterance(text);

  const voices = window.speechSynthesis.getVoices();
  const preferredVoice =
    voices.find(v => v.name.includes("Samantha")) ||
    voices.find(v => v.lang.startsWith("en")) ||
    voices[0];

  if (preferredVoice) {
    speech.voice = preferredVoice;
  }

  speech.rate = 0.9;
  speech.pitch = 1;
  speech.volume = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}