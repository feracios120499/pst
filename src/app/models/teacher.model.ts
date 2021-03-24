export class Teacher {
    public Email: string;
    public Id: number;
    public Image: string;
    public Name: string;
    public Phone: string;
    public Details: Array<TeacherDetail>;
    public Position: number;

    get FirstName(): string {
        if (this.Name)
            return this.Name.split(' ')[0];
    }

    get NotFirstName(): string {
        if (!this.Name)
            return '';
        var array = this.Name.split(' ');
        var name: string = '';
        for (var i = 1; i < array.length; i++) {
            name += array[i] + ' ';
        }
        return name;
    }
    static fromJSON(data: any): Teacher {
        return Object.assign(new this, data);
    }
}
export class TeacherDetail {
    public Id: number;
    public Position: number;
    public TeacherId: number;
    public Text: string;
    public Title: string;
}