import  {BUY_CAKE}  from "./cakeTypes"

export const buyCake =(number=1)=>{ //so now it takes number by default we have value 1, so it retains the past functionality
    return{
        type: BUY_CAKE,
        payload: number
    }
}
// export default buyCake; doesn't work here due to default