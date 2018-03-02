    var rootNode = document.getElementById("root");
    var header = document.createElement("h1");
        header.innerHTML = "Most popular tanks";
    var hashVariable = window.location.hash;
    var thumbnailsWrapper = document.createElement("div");
    var detailsWrapper = document.createElement("div");

    function generatePrevPage(obj) {
        thumbnailsWrapper.className = "thumbnails";
        thumbnailsWrapper.appendChild(header);
        rootNode.appendChild(thumbnailsWrapper);

        for (var key in obj) {
            var tankWrapper = document.createElement("a");
            var tankInfo = document.createElement("div");
            var tankName = document.createElement("p");
            var tankLevel = document.createElement("span");
            var tankImage, tankCountryFlag;
            tankWrapper.className = "tank-wrapper";
            tankInfo.className = "tank-info";
            tankName.innerHTML = obj[key].model;
            tankImage = obj[key].preview;
            tankLevel.innerHTML = obj[key].level;
            tankCountryFlag = obj[key].country_image;
            tankWrapper.setAttribute("href", "#" + obj[key].model);
            tankWrapper.innerHTML = "<img src=" + tankImage  + " />";
            tankInfo.innerHTML = "<img src=" + tankCountryFlag + " />";
            tankInfo.appendChild(tankLevel);
            tankInfo.appendChild(tankName);
            tankWrapper.appendChild(tankInfo);
            thumbnailsWrapper.appendChild(tankWrapper);

            tankWrapper.onclick = function(){
                hashVariable = obj[key].model;
            };
         }
        return thumbnailsWrapper;
    }

    function generateDetailsPage(obj) {
        var tankDetailWrapper = document.createElement("div");
        var tankDetailsName = document.createElement("h1");
        var tankTableWrapper = document.createElement("div");
        var prev = document.createElement("p");
        var back = document.createElement("p");
        var takedTankName = location.hash.slice(1);
        var tankImage, tankCountryFlag;;
        thumbnailsWrapper.style.display = "none";
        detailsWrapper.className = "tank-details";
        tankDetailsName.className = "tank-info-details";
        tankDetailWrapper.className = "tank-big-image inline-block";
        tankTableWrapper.className = "table inline-block";
        prev.innerHTML = "Preview";
        prev.className = "prev";
        back.innerHTML = "Back to list view";
        back.className = "back";
        back.addEventListener("click", function(){
             window.history.go();
        });

        for (var j in tanks) {
            tankCountryFlag = obj[j].country_image;
            tankImage = obj[j].preview;
            if (takedTankName === tanks[j].model) {
                tankDetailsName.innerHTML = "<img src=" + tankCountryFlag + " />" + " " + takedTankName + " " + "level (" + tanks[j].level + ")";
                tankDetailWrapper.innerHTML = "<img src=" + tankImage  + " />";
                tankTableWrapper.innerHTML = "<div><table><caption>Characteristic</caption><tr><td>damage</td><td>" + tanks[j].details.damage + "</td></tr><tr><td>breoning</td><td>" + tanks[j].details.breoning + " </td></tr><tr><td>attack speed</td><td>" + tanks[j].details.attack_speed + "</td></tr><tr><td>time of targeting</td><td>" + tanks[j].details.time_of_targeting + "</td></tr><tr><td>ammunition</td><td>" + tanks[j].details.ammunition + "</td></tr></table></div>";
                }
        }

        detailsWrapper.appendChild(tankDetailsName); 
        detailsWrapper.appendChild(prev);
        detailsWrapper.appendChild(tankDetailWrapper); 
        detailsWrapper.appendChild(tankTableWrapper); 
        detailsWrapper.appendChild(back); 
        rootNode.appendChild(detailsWrapper);
        return detailsWrapper;
    }

    window.onhashchange = function(){
        generateDetailsPage(tanks);
    }

    rootNode.appendChild(generatePrevPage(tanks));