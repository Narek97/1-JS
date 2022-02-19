// Liskov substitution principle

////orinak 1
// class Person {
//     access(){
//         console.log('U tebya est dostup')
//     }
// }
//
// class Member extends Person {
//     access(){
//         console.log('U tebya est dostup')
//     }
// }
//
// class Guest extends Person {
//     isGuest = true
// }
//
// class Frontend extends Member {
//     canCreateFrontend(){
//     }
// }
//
// class Backend extends Member {
//     canCreateBackend(){
//     }
// }
//
// class PersonFromDifferentCompany extends Guest {
//     access() {
//         throw new Error('U tebya net dostupa')
//     }
// }
//
// function openSecretDoor(member) {
//     member.access()
// }
//
// openSecretDoor(new Frontend())
// openSecretDoor(new Backend())
// // openSecretDoor(new PersonFromDifferentCompany())

//**********************
// orinak 2

class Component {
    isComponent = true
}

class ComponentWithComponent extends Component {
    render(){
        return ` <div>Component</div>    `
    }
}

class HOCComponent extends Component {}

class HeaderComponent extends ComponentWithComponent {
    getInit(){}
}

class FooterComponent extends ComponentWithComponent {
    afterInit(){}
}

class HOC extends HOCComponent {
    render() {
        throw new Error('Render is impossible here')
    }

    wrapComponent(component){
        component.wrapped = true
        return component
    }
}

function renderComponent(component) {
    console.log(component.render());
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())
// renderComponent(new HOC())

