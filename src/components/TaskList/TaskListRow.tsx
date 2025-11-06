type TaskListRowProps = {
    title: string,
    description: string | null,
    status: string,
}

function TaskListRow(props: TaskListRowProps) {
    return (<>
        <div>{props.title}</div>
        <div>{props.description}</div>
        <div>{props.status}</div>
    </>)
}

export default TaskListRow