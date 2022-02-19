import React from 'react'

export default ({person}) => {

    return (
        <div>
            <p>Выбран пользователь <b>{person.firstName + ' ' + person.lastName}</b></p>
            <p>Описание <br/> <textarea defaultValue={person.description}/></p>
            <p>Адрес проживание <b>{person.address.city}</b></p>
            <p>Улица <b>{person.address.streetAddress}</b></p>
            <p>индекс <b>{person.zip}</b></p>


        </div>
    )
}