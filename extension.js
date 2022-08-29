module.exports = {
    "name": "Quick",
    "publisher": "ADA",
    "cards": [{
        "type": "LinkCard",
        "source": "./src/cards/QuickButtonLinksCard",
        "title": "Quick Link with HTML page",
        "displayCardType": "Links",
        "description": "Link buttons",
        "template": {
            "image": "./src/assets/quickbuttonlinks.png",
            "title": "Quick Page Routing",
        },
        "customConfiguration": {
            "source": "./src/cards/QuickButtonLinksTemplateConfig.jsx"
        }
    }],
        "page":  {
            "source": "./src/page/router.jsx"
        }
}