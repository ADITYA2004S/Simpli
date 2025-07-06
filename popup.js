const SwitchOn = document.querySelector(".turn-on");
const SwitchOff = document.querySelector(".turn-off");
let status = document.querySelector(".status");

status.style.width = "fit-content";
status.style.padding = "5px";
status.style.borderRadius = "5px";
status.style.backgroundColor = "red";

SwitchOn.addEventListener("click", () => {
  chrome.runtime.sendMessage({ state: "on" }); // ✅ Send ON state
  chrome.storage.local.set({ extension: true });
  status.textContent = "ON";
  status.style.backgroundColor = "green";
});

SwitchOff.addEventListener("click", () => {
  chrome.runtime.sendMessage({ state: "off" }); // ✅ Send OFF state
  chrome.storage.local.set({ extension: false });
  status.textContent = "OFF";
  status.style.backgroundColor = "red";
});
