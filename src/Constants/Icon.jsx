
const Icons = {
    add: "/icons/add.png",
    edit: "/icons/edit.png",
    delete: "/icons/delete.png",
    view: "/icons/view.png",
    dashboard: "/icons/dashboard.png",
    chart: "/icons/chart.png",
    team: "/icons/team.png",
    notes: "/icons/notes.png",
    settings: "/icons/settings.png",
    logout: "/icons/logout.png",
    wallet: "/icons/wallet.png",
    pieChart: "/icons/pie-chart.png",
    user: "/icons/user.png",
    dollar: "/icons/dollar.png",
    more: "/icons/more.png",
    calendar: "icons/calendar.png",
    notification: "/icons/notification.png",
    message: "/icons/message.png",
    timer: "/icons/timer.png"
}

const Icon = ({name}) => {

    return(
        <>
            <img src={Icons[name]} alt={Icons[name]} />
        </>
    )
}

export default Icon;