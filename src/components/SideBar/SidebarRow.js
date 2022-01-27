import './SidebarRow.css'

const SidebarRow = ({ selected, Icon, title }) => {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow_icon" />
            <p className="sidebarRow_title">{title}</p>
        </div>
    )
}

export default SidebarRow
