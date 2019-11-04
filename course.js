/* eslint-disable*/


class Course{

    constructor(){
        this.courseInfo=[{Id:"cs301", name:"Html", code:"cs1"},{Id:"cs303", name:"Java", code:"cs2"},
        {Id:"cs403", name:"JavaSript", code:"cs3"},{Id:"cs503", name:"Data", code:"cs4"} ]


    }

    mysort(sortby){
       let y=this.courseInfo.sort((a,b)=>a[sortby]>b[sortby]?1:-1);
    return y;
    }



}
