#include <iostream>
#include <string>
#include <stdio.h>
#include <stdlib.h>

int main(){
    std::string oneLine = "";

    unsigned int length = 0;

    //read the first four bytes (=> Length)
    /*for (int i = 0; i < 4; i++)
    {
        int read_char = getchar();
        length += read_char * (int) pow(2.0, i*8);
        std::string s = std::to_string((long long)read_char) + "\n";
        fwrite(s.c_str(), sizeof(char), s.size(), f);
        fflush(f);
    }*/

    //Neat way!
    for (int i = 0; i < 4; i++)
    {
        unsigned int read_char = getchar();
        length = length | (read_char << i*8);
    }

    //read the json-message
    std::string msg = "";
    for (int i = 0; i < length; i++)
    {
        msg += getchar();
    }

    // std::string message = "{\"text\":\"This is a response message\"}";
    // // Collect the length of the message
    // unsigned int len = message.length();

    // i need to get my shit to work fuck reponses
	std::string directory = "/usr/bin/";
	std::string command = directory + "filezilla " + msg + ":21";

	int result = system(command.c_str());

	// TODO: Send the message back to the extension
	// flush the message format 
    // Define our message
    
    std::string message = msg;
     // Collect the length of the message
    unsigned int len = message.length();
    // We need to send the 4 bytes of length information
    printf("%c%c%c%c", (char) (len & 0xff),
                       (char) ((len>>8) & 0xFF),
                       (char) ((len>>16) & 0xFF),
                       (char) ((len>>24) & 0xFF));
    // Now we can output our message
    printf("%s", message.c_str());

    return 0;
}