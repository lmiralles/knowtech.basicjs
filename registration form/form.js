(function() {
    //la funció crea un context, i només s'usa en aquest fitxer
    
    var Form = {
        createTooltip: function(text) {
            var rawTooltipTemplate = document.getElementById("tooltipTemplate");

            var tempContainer = document.createElement("div");
            tempContainer.innerHTML = rawTooltipTemplate.textContent;

            var tooltip = tempContainer.querySelector("div");
            //querySelector és per seleccionar elements HTML

            var tooltipText = tooltip.querySelector("span");
            tooltipText.textContent = text;

            // per afegir element nou a la pàgina
            //document.body.appendChild(tempContainer);

            return tooltip;
        },

        appendTooltipNextTo: function(elementSelector, text) {
            var tooltip = this.createTooltip(text);
            var element = document.querySelector(elementSelector);

            var leftPosition = element.offsetLeft;
            //width surt com a text, amb "PX" darrera
            var elementWidth = window.getComputedStyle(element).width;
            elementWidth = elementWidth.replace("px", "");
            elementWidth = parseInt(elementWidth);

            var elementPaddingLeft = window.getComputedStyle(element).paddingLeft;
            elementPaddingLeft = elementPaddingLeft.replace("px", "");
            elementPaddingLeft = parseInt(elementPaddingLeft);

            var elementPaddingRight = window.getComputedStyle(element).paddingLeft;
            elementPaddingRight = elementPaddingRight.replace("px", "");
            elementPaddingRight = parseInt(elementPaddingRight);

            var tooltipPosition = 5 + leftPosition + elementWidth + elementPaddingLeft + elementPaddingRight;

            var elementHeight = window.getComputedStyle(element).height;
            elementHeight = elementHeight.replace("px", "");
            elementHeight = parseInt(elementHeight);

            //afegir al doc
            document.body.appendChild(tooltip);
            tooltip.style.left = tooltipPosition + "px";
            tooltip.style.top = elementHeight + "px";

            //debugger;
        }
    };


    document.addEventListener("DOMContentLoaded", function() {
        Form.appendTooltipNextTo("#iUsername", "PATATA");    
    });
    
    //https://material.angularjs.org
})();