

export function firstLoad(tasks) {
    const sidebar = document.getElementById('sidebar');
    const workspace = document.getElementById('workspace')
    sidebar.innerHTML = tasks[0]
    workspace.innerHTML = tasks[0]

}