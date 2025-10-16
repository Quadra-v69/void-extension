document.getElementById('redirectBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !tab.url) return;

  const useFreedium = document.getElementById('freediumCheck').checked;

  // Choose which site to use based on checkbox
  const base = useFreedium
    ? 'https://freedium.cfd/'
    : 'https://live.dinesh049.shop/';

  const redirectUrl = `${base}${tab.url}`;

  // Open in a new tab
  chrome.tabs.create({ url: redirectUrl });

  // Optional: close the popup after click
  window.close();
});
