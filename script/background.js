//在特点的页面点亮插件图标
(function () {
  chrome.runtime.onInstalled.addListener(() => {
    // Page actions are disabled by default and enabled on select tabs
    chrome.action.disable();

    // Clear all rules to ensure only our expected rules are set
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
      // Declare a rule to enable the action on example.com pages
      let exampleRule = {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostSuffix: "baidu.com" },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowAction()],
      };

      // Finally, apply our new array of rules
      let rules = [exampleRule];
      chrome.declarativeContent.onPageChanged.addRules(rules);
    });
  });
})();

chrome.contextMenus.create({
  id: "side_menu",
  title: "系统通知",
});

chrome.contextMenus.create({
  id: "side_menu_2",
  type: "checkbox",
  title: "复选框",
});

chrome.contextMenus.create({
  id: "side_menu_3",
  type: "radio",
  title: "单选框",
});

chrome.contextMenus.create({
  id: "selection",
  contexts: ["selection"],
  title: "选择文本",
});

chrome.contextMenus.onClicked.addListener(() => {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "../cat.png",
    title: "你好",
    message: "奥特曼",
  });
});
