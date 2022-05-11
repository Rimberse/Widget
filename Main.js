define
(
    'Widget/Main',
    [
        // 3DEXPERIENCE Cloud Platform JS modules 
        'DS/PlatformAPI/PlatformAPI'
    ],
    function
    (
        PlatformAPI
    )
    {

        // Declare public functions or variables here. Accessible by other modules. Call it by "Main.<function>". Usage sample, e.g. Main.onLoad() 
        var exports = {
            onLoad: function() {
                console.info("Global var widget", widget);

                console.log("Widget is running!");
                let count = 0;
                const container = document.createElement('div');
                const button = document.createElement('div');
                const text = document.createElement('div');

                button.addEventListener('click', () => {
                    count++;
                    text.innerHTML = `The button has been clicked ${count} times`;
                })

                container.appendChild(button);
                container.appendChild(text);
                widget.body.innerHTML = container;
            },

            onResize: function() {
                console.info("onResize");
            },

            onViewChange: function() {
                console.info("onViewChange");
            },

            onEdit: function() {
                console.info("onEdit");
            },

            onRefresh: function() {
                console.info("onRefresh");
            },

            endEdit: function() {
                console.info("endEdit");
            }
        };

        return exports;
    }
);