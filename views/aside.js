const mainAside = document.getElementById('aside');

const mainAsideObj = {

    asideHeader: {
        appLogo: "iD0-reminder",
        appName: "Reminders"
    },

    asideItems: [
        {icon: "iD0-prayer", title: "Prayer", route: "#prayer", active: true},
        {icon: "iD0-dashboard", title: "Dashboard", route: "#dashboard", active: false},
        {icon: "iD0-tasks", title: "Tasks", route: "#tasks", active: false},
        {icon: "iD0-reminder-li", title: "Reminders", route: "#reminders", active: false},
        {icon: "iD0-pocket", title: "My Pocket", route: "#pocket", active: false},
        {icon: "iD0-categories", title: "Categories", route: "#categories", active: false},
        {icon: "iD0-archive", title: "Archive", route: "#archive", active: false}]
}

function mainAsideTemp(){

    let asideTemp = `
                    <section>

                        
                    <header class="D0-rem-header cD0-bg-white-gray w-100 cD0-gray fD0-size-29 fD0-arial d-flex uD0-gap-24 align-items-center">
                        <i class="${mainAsideObj.asideHeader.appLogo} uD0-cover uD0-size-42-36 d-inline-block"></i>
                        ${mainAsideObj.asideHeader.appName}
                        <i class="iD0-menu uD0-cover uD0-size-32 d-inline-block uD0-m-l-auto"></i>
                    </header>


                    <ul class="ps-0">
                    `
        for(let [index, item] of mainAsideObj.asideItems.entries()){
            asideTemp+= `<li onclick="toggleActive(${index}); router(${index});" class="${item.active ? "cD0-bg-blue" : false} D0-aside-li d-flex cD0-white-gray fD0-size-29 fD0-arial uD0-gap-24 align-items-center">
                        <i class="${item.icon} uD0-cover uD0-size-32 d-inline-block"></i>
                        ${item.title}
                        </li>`
        }

        asideTemp+= `
                    </ul>

                    <div>
                    </div>

                    </section>
                    `

    return asideTemp
}

function toggleActive(index){
    for (let item of mainAsideObj.asideItems){
        item.active= false;
    }
    mainAsideObj.asideItems[index].active= true;
    componentRender()
}

function router(index){
    for (let item of mainAsideObj.asideItems){
        if (item.active){
            var route = item.route;
            break;
        }
    }
    window.location.hash = route 
}

function obtainRoute(){
    var hash = window.location.hash
    for (let [index, item] of mainAsideObj.asideItems.entries()){
        item.route == hash ? toggleActive(index) : false
    }
}

function componentRender(){
    mainAside.innerHTML = mainAsideTemp()
}


componentRender()
obtainRoute()
