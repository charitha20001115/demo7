namespace task;

entity student{
    key sid: Integer;
    sname: String;
    stud_tot: Composition of many total on stud_tot.tot_stud =$self;
}

entity total{
    key sid: Integer;
    key pid: Integer;
    sname: String;
    total: Integer;
    tot_stud: Association to one student on tot_stud.sid = sid;
    tot_mark: Composition of many marks on tot_mark.mark_tot = $self;
}

entity marks{
    key pid: Integer;
    key sid: Integer;
    key subject: String;
    marks: Integer;
    mark_tot: Association to one total on mark_tot.pid = pid;
}