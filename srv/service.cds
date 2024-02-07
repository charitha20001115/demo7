using task as tables from '../db/schema';

service MyService {

    entity stud_t as projection on tables.student;
    entity total_t as projection on tables.total;
    entity mark_t as projection on tables.marks;
}
