const navigationData = [
    {
        "id": 1,
        "name": "Home"
    },
    {
        "id": 2,
        "name": "Alerts",
        "children": [
            {
                "id": 1,
                "name": "Usage and examples"
            },
            {
                "id": 2,
                "name": "Alert"
            },
            {
                "id": 3,
                "name": "Warning Alert"
            }
        ]
    },
    {
        "id": 3,
        "name": "Buttons",
        "children": [
            {
                "id": 1,
                "name": "Usage and Examples"
            },
            {
                "id": 2,
                "name": "Button"
            },
            {
                "id": 3,
                "name": "Button Group"
            }
        ]
    },
    {
        "id": 4,
        "name": "Forms",
        "children": [
            {
                "id": 1,
                "name": "Usage and examples"
            },
            {
                "id": 2,
                "name": "Inputs",
                "children": [
                    {
                        "id": 1,
                        "name": "Credit Card Input"
                    },
                    {
                        "id": 2,
                        "name": "Number Input"
                    }
                ]
            },
            {
                "id": 3,
                "name": "Selectors",
                "children": [
                    {
                        "id": 1,
                        "name": "Checkbox"
                    },
                    {
                        "id": 2,
                        "name": "Date Picker"
                    },
                    {
                        "id": 3,
                        "name": "Radio"
                    }
                ]
            }
        ]
    }
];
export function fetchData() {
    return navigationData;
}