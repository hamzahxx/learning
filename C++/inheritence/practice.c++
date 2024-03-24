#include <iostream>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>

using namespace std;
class Human {
    private:
        int age;
        int energy;

    public:
        Human() {
            cout << "human started working" << endl;
            sleep(1);
            this->age = 18;
            this->energy = 80;
        }

        Human(int inpAge, int inpEnergy) {
            this->age = inpAge;
            this->energy = inpEnergy;
        }

        ~Human() {
            cout << "human died" << endl;
            sleep(1);
        }

        void work() {
            if (this->energy <= 20)
            {
                cout << "cant work, too tired.\ntry taking rest" << endl;
            }
            else
            {
                this->energy = this->energy - 20;
                cout << "worked" << endl;
                sleep(1);
            }
        }

        void rest() {
            if(this->energy >= 120) {
                cout << "rested enough cant sleep" << endl;
            } else {
                this->energy = this->energy + 80;
            }
            if (this->energy > 120)
            {
                this->energy = 120;
            }
        }
};

class Employee : public Human{
    private:
        int id;
        float salary;

    public:
        Employee() {
            this->salary = 35;
        }

        Employee(int inpID) {
            this->id = inpID;
            this->salary = 40;
        }

        ~Employee() {}

        // Identification
        void setID(int inpID) {
            this->id = inpID;
        }

        void displayID() {
            cout << this->id << endl;
        }

        // Salary
        void setSalary(float inputSalary) {
            this->salary = inputSalary;
        }

};

class Programmer : public Employee {
    public:
        string language;

        Programmer() {
            cout << "default programmer" << endl;
        }

        Programmer(string inpVal, int inpID) {
            this->language = inpVal;
            this->setID(inpID);
        }
        ~Programmer() {}
};

int main() {
    system("clear");
    Employee hamzah(1), taha;

    taha.setID(5);

    Programmer milhan("java", 4);
    milhan.displayID();
    milhan.rest();
    milhan.rest();
    taha.work();
    taha.work();
    taha.work();
    taha.work();

    return 0;
}