$("#show_badge").click(() => {
  chrome.action.setBadgeText({ text: "cat" });
});

$("#hide_badge").click(() => {
  chrome.action.setBadgeText({ text: "" });
});
