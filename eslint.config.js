import antfu from '@antfu/eslint-config'

export default antfu({}, {
    "rules": {
        "curly": "off",
        "no-console": "off",
        "vue/component-tags-order": ["error", {
            "order": [["script", "template"], "style"]
        }]
    }
})