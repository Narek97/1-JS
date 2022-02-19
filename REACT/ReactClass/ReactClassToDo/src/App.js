import React from 'react';
import './App.css';
import {TodoList} from "./components/todoList/TodoList";
import {AppHeader} from "./components/appHeader/AppHeader";
import {SearchPanel} from "./components/searchPanel/SearchPanel";
import {ItemStatusFilter} from "./components/itemStatusFilter/ItemStatusFilter";
import ItemAddForm from "./components/itemAddForm/ItemAddForm";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoData: [
                {id: 1, label: 'Drink coffee', done: false, important: false},
                {id: 2, label: 'Drink milk', done: false, important: true},
                {id: 3, label: 'Drink water', done: false, important: false},
            ],
            term: '',
            filter: 'all'
        };
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            let newTodoData = todoData.filter(item => item.id !== id);
            return {
                todoData: newTodoData
            };
        });

    };

    onItemAdd = (text) => {
        if (text.length === 0) {
            return
        }
        let newItem = {label: text, important: false, done: false, id: new Date()};
        this.setState(({todoData}) => {
            let newArr = [
                ...todoData,
                newItem
            ]
            return {
                todoData: newArr
            }
        });
    };

    toggleProperty = (id, propName) => {

        let newArr = this.state.todoData.map(item => {

            if (item.id === id) {
                item[propName] = !item[propName]
            }
            return item
        })
        this.setState(() => {
                return {
                    todoData: newArr
                }
            }
        )
    }

    onToggleImportant = (id) => {
        this.toggleProperty(id, 'important')
    }

    onToggleDone = (id) => {
        this.toggleProperty(id, 'done')
    }

    onSearch = (e) => {
        this.setState({term: e})
    }

    onSearchItem = (items, val) => {
        if (val.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.label.indexOf(val) > -1
        })

    }

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter(item => !item.done);
            case 'done':
                return items.filter(item => item.done);
            default:
                return items;
        }
    }

    onFilterChange = (filter) => {
        this.setState({filter})
    }

    render() {
        const {todoData, term, filter} = this.state
        const visibleItems = this.filter(
            this.onSearchItem(todoData, term), filter
        )
        const doneCount = todoData.filter(el => el.done).length
        const todoCount = todoData.length - doneCount

        return (
            <div className="App">
                <AppHeader
                    todo={todoCount}
                    done={doneCount}
                />
                <SearchPanel
                    onSearch={(val) => this.onSearch(val)}
                />
                <ItemStatusFilter
                    filter={filter}
                    onFilterChange={this.onFilterChange}
                />
                <TodoList
                    todos={visibleItems}
                    onDelete={(id) => this.deleteItem(id)}
                    onToggleImportant={(id) => this.onToggleImportant(id)}
                    onToggleDone={(id) => this.onToggleDone(id)}
                />
                <ItemAddForm
                    onItemAdd={(text) => this.onItemAdd(text)}
                />
            </div>
        );
    };

}
;

export default App;
