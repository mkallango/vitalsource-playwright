async function get_screenshot(page, folder, prefix, sufix) {
    await page.screenshot({path: `${folder}/${prefix}-${sufix}.png`})
}

module.exports = {get_screenshot}