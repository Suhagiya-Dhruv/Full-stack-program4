public class Main
{
	public static void main(String[] args) {
	    
	    int a [] = {1, 5, -8, 10, 0, 5, 18, 12, 60, -2};
	    int c = 0;
	    int b = 0;
	    
		for(int i=0; i<a.length; i++){
            int j = i+1;
            while(j<a.length){
                if(a[i]+a[j]==c){ // 4 != 4
                    b = 1;
                    break;
                }
                j++;
            }
            if(b == 1){
                break;
            }
        }
        
        if(b == 1){
            System.out.println("Yes");
        }else{
            System.out.println("No");
        }
	}
}