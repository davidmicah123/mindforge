class Employees{
    int empId = 1;
    string _empNmae = "Anderson Talisca";
    int _age = 25;

    public void Display(){
        Console.WriteLine("EmployeeId: {0}", _empId);
        Console.WriteLine("EmployeeName: {0}", _empName);
    }
}

class Department : Employees{
    int _deptId = 501;
    string _deptName = "Sales";
    new void Desplay(){
        base.Display();

        Console.WriteLine("DepartmentId: {0}", _deptId);
        Console.WriteLine("DepartmentName: {0}", _deptName);
    }

    static voidMain(string[] arggs){
        Department objDepartment = new Department();

        objDepartment.Display();
    }

}