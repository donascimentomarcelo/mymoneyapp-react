export function selectTab(tabId) {
    console.log(tabId);
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabIds) {
    const tabsToShow = {};
    tabIds.forEach(_ => tabsToShow[_] = true);
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}