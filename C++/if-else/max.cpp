#include <iostream>
using namespace std;

int main() {
    int arr[2];
    cin >> arr[0] >>arr[1] >> arr[2];
    if(arr[0]>arr[1]) {
        if(arr[0]>arr[2]) {
            cout << arr[0] << endl;
        } else {
            cout << arr[2] << endl;
        }
    } else {
        if(arr[1]>arr[2]) {
            cout << arr[1] << endl;
        } else {
            cout << arr[2] << endl;
        }
    }
    return 0;
}