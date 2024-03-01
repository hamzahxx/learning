#include <iostream>
#include <unistd.h>
#include <string>

using namespace std;

class Bike {

    string color;
    int topSpeed;

    public:
        //Default
        Bike() {
            cout << "Default Constructor Invoked!" << endl;
            this->topSpeed = 0;
            this->color = "Unknown";
        }
        //Custom
        Bike(string bikeColor ,int topSpeed) {
            cout << "Overloaded Constructor Invoked!" << endl;
            this->topSpeed = topSpeed;
            this->color = bikeColor;
        }

        ~Bike() {
            cout << "Destructor Invoked!!!" << endl;
        }

        void setSpeed(int speed) {
            this->topSpeed = speed;
        }

        void setColor(string bikeColor) {
            this->color = bikeColor;
        }

        void showInfo() {
            cout << "The color is " << this->color << endl;
            cout << "The top speed is " << this->topSpeed << endl;
        }
};

int main() {
    //Declaration
    int timer = 2;
    string inputColor;
    int inputSpeed;

    //Inputs
    cout << "enter bike color: ";
    cin >> inputColor;
    
    cout << "enter bike speed: ";
    cin >> inputSpeed;
    
    //Initialisation of class
    Bike splendor(inputColor, inputSpeed);
    
    sleep(timer);

    splendor.showInfo();
    sleep(timer);
    return 0;
}