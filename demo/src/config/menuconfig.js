const menuList = [
    {
        title:"首页",
        path:'/home',
        icon:'home'
    },
    {
        title:"11111",
        path:'/xxx',
        icon:'home'
    },
    {
        title:"学生管理",
        path:'/admin/student',
        icon:'appstore',
        children:[
            {
                title:"添加学生",
                path:'/admin/student/add',
            },
            {
                title:"学生列表",
                path:'/student',
            },
            {
                title:"学生成绩",
                path:'/admin/student/list2',
            }
        ]
    },
    {
        title:"教师管理",
        path:'/admin/teacher',
        icon:'appstore',
        children:[
            {
                title:"教师列表",
                path:'/admin/teacher/list'
            },
            {
                title:"教师成绩",
                path:'/admin/teacher/list2'
            }
        ]
    }
]

export default menuList;