const task = [
    { name:'Task 1', complete: false },
    { name:'Task 2', complete: false },
    { name:'Task 3', complete: true },
    { name:'Task 4', complete: false },
    { name:'Task 5', complete: true },
    { name:'Task 6', complete: true },
]

let taskcomplete = task.filter((ex) => !ex.complete);

alert(taskcomplete[0].name)
