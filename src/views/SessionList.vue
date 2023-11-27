<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const sessionList = computed(() => store.state.session.sessionList)

const getSessionList = () => {
    store.dispatch('GET_SESSIONLIST_FROM_STATE')
}

getSessionList()

const date = (dateStart, dateEnd) => {
    const startDate = new Date(Date.parse(dateStart))
    const endDate = new Date(Date.parse(dateEnd))
    return `${startDate.getDate()}.${startDate.getMonth() + 1}.${startDate.getFullYear()}, ${startDate.getHours()}:${startDate.getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()}`
}

</script>

<template>
    <div class="session session-wrapper">
        <h5 class="session-title">Учебные сессии</h5>
        <div class="session-table">
            <table>
                <thead>
                    <tr>
                        <th>Дата и время</th>
                        <th>Статус</th>
                        <th>Название учебного модуля</th>
                        <th>Тип сессии</th>
                        <th>Комната</th>
                        <th>Группа</th>
                    </tr>
                </thead>
    	    </table>
            <div class="session-table-body">
                <table>
                    <tbody>
                        <tr v-for="session in sessionList" :key="session.id">
                            <td>{{ date(session.start, session.end) }}</td>
                            <td>{{ session.status.name }}</td>
                            <td>{{ session.module }}</td>
                            <td>{{ session.type.name }}</td>
                            <td>
                                <span v-for="room in session.rooms" :key="room.id">{{ room.name }}, </span>
                            </td>
                            <td>
                                <span v-for="group in session.groups" :key="group.id">{{ group.name }}, </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="session-table-pagination">
                <span>назад</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>...</span>
                <span>25</span>
                <span>вперед</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/base.scss';
@import '@/assets/main.scss';

.session {

    &-title {
        color: $color-text;
        font-size: 24px;
        font-style: normal;
        font-weight: 800;
        line-height: 28px;
    }

    &-table {
        margin-top: 0px;
        margin-bottom: 24px;
        border-radius: 12px;
        border: 1px solid #E8EAEC;

        &-body {
             height: calc(100vh - 200px);
            overflow-x: auto;
        }
        
        table {
            width:100%;
            table-layout: fixed;
            border: none;
            border-collapse: collapse;
        }

        th, td {
            padding: 10px 16px;
        }

        thead tr {
            background: $color-background-grey;
        }

        thead th {
            text-align: left;
            border: none;

            &:first-child {
                border-radius: 12px 0 0 0;
            }

            &:last-child {
                border-radius: 0 12px 0 0;
            }
        }

        thead th:nth-child(1),
        tbody td:nth-child(1) {
            width: 15%;
        }

        thead th:nth-child(2),
        tbody td:nth-child(2) {
            width: 10%;
        }

        thead th:nth-child(3),
        tbody td:nth-child(3) {
            width: 35%;
        }

        thead th:nth-child(4),
        tbody td:nth-child(4) {
            width: 10%;
        }

        thead th:nth-child(5),
        tbody td:nth-child(5) {
            width: 20%;
        }

        thead th:nth-child(5),
        tbody td:nth-child(5) {
            width: 10%;
        }

        tbody td {
            text-align: left;
            border: none;
        }

        tbody tr:nth-child(even){
            background: $color-background-grey;
        }

        &-pagination {
            padding: 11px 16px;
            background: $color-background-grey;
            display: flex;
            gap: 8px;
            border-radius: 0 0 12px 12px;

            span {
                width: 30px;
                height: 30px;
                padding: 10px;
                border-radius: 8px;
                background: $color-background;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
}

</style>
