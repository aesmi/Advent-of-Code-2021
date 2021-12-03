package day_01.PartOne;
import java.io.*;
import java.util.*;

public class PartOne {

    public static int Solution(){
        int depth = 0;
        ArrayList<Integer> input = new ArrayList<>(0);
        try{
            File txt = new File("./input.txt");
            Scanner scanner = new Scanner(txt);
            while(scanner.hasNextLine()){
                String data = scanner.nextLine();
                int intData =  Integer.parseInt(data);
                input.add(intData);
            }
            scanner.close();
        } catch (FileNotFoundException e){
            System.out.println("File can not be imported");
            e.printStackTrace();
        }
        for ( int i = 1; i < input.size(); i++){
            if ( input.get(i) > input.get(i-1) ){
                depth++;
            }
        }
        return depth;
    }
    public static void main(String args[]){
        System.out.print(Solution());
    }
}