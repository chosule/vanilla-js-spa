


const router = async () => {
    const routes = [
        { path: '/', view: () => console.log('router page') },
        { path: '/main', view: () => console.log('main page') },
        { path: '/detail', view: () => console.log('detail page') },
    ]
    const potentialMatches = routes.map((route) => {
        return {
            route: route,
            isMatch: location.pathname === route.path //true false 반환
        }
    })
    console.log(potentialMatches)
    let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

    //정의된 곳으로 이동하지 않으면 기본값으로 되돌린다.
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }
    // 매칭된 match함수에서 view 보여주기
    match.route.view();
}
const navigateTo = (url) => {
    history.pushState({}, null, url);
    router();
}

window.addEventListener('popstate', router) //앞으로가기 뒤로가기를 누르면 화면 전환

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener('click', (e) => {
        //data-link라는 data attribute를 가진 링크에만 작동하도록 조건문을 작성해 이벤트를 위임한다.
        if (e.target.matches('[data-link]')) {
            e.preventDefault(); //새로고침 방지
            navigateTo(e.target.href);
        }
    })
    router();
})
