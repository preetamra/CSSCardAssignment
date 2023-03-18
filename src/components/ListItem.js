import classes from "./ListItem.module.css";
import "@fontsource/poppins";
import Rating from 'react-animated-rating';
import React,{useState} from "react";

export default function ListItem(props) {
    const [hover,setHover] = useState(false);
    console.log("ListItem",props);

    return(
        <div 
        onMouseEnter={() => {
           setHover(true)
        }}
        
        onMouseLeave={() => {
            setHover(false)
        }}
        className={classes.ItemContainer}>
          <div style={hover?{backgroundColor:"#003F5C"}:{}} className={classes.partA}>
            <div className={hover?classes.partA1Hover:classes.partA1}>{props.data.num_classes} Sessions</div>
            <div style={hover?{color:"#FFFFFF"}:{}} className={classes.partA2}>{props.data.display_name}</div>
            <div style={hover?{color:"#FFFFFF"}:{}} className={classes.partA3}>
                <Rating size={"20px"} count={parseInt(props.data.rating.split(";")[1])} filled={parseInt(props.data.rating.split(";")[0])}></Rating>
                ({parseInt(props.data.rating.split(";")[2])} Reviews)
            </div>
            <div className={classes.discount}>20% off</div>
          </div>
          <div className={classes.partB}>
            <div className={classes.partB1}>
                {props.data.pitch}
            </div>
            <div className={classes.partB2}>
                <div className={classes.partB21}>
                Students will achieve:
                </div >
                <ul className={classes.partB22}>            
                    {props.data.curriculum_outcomes.map(data => <li>{data}</li>)}
                </ul>
            </div>
            <div className={classes.partB3}>
            View Detailed lesson plan
            </div>
            <div className={classes.partB4}></div>
          </div>
          <div className={classes.partC}>
            <div className={classes.partC1}>
                <div className={classes.partC11}>
                    <div className={classes.partC111}>
                    ₹ {props.data.discounted_price}
                    </div>
                    <div className={classes.partC112}>
                    ₹ {props.data.original_price}
                    </div>
                </div>
                <div className={classes.partC12}>
                ₹ {Math.round(props.data.discounted_price/props.data.num_classes)} per class
                </div>
            </div>
            <div className={classes.partC2}>
            We'll schedule the slots as per your convenience
            </div>
          </div>
          <div className={classes.partD}>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M0 9C0 13.9705 4.02942 18 9 18C13.9706 18 18 13.9705 18 9C18 4.02946 13.9705 0 9 0C4.02946 0 0 4.02942 0 9ZM9 15.6774V2.32258C12.6909 2.32258 15.6774 5.30967 15.6774 9C15.6774 12.6909 12.6903 15.6774 9 15.6774Z" fill="#F9B215"/>
</svg>    
            8 Activities 
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
<path d="M0 13.1067L1.52317 15.9261C1.67458 16.249 1.90682 16.5204 2.19395 16.7101C2.48107 16.8997 2.81176 17.0001 3.14907 17H13.2587L11.1617 13.1067H0ZM17.7042 12.067L11.817 1.03594C11.662 0.723074 11.4305 0.461332 11.1471 0.278819C10.8638 0.0963063 10.5394 -8.36103e-05 10.2088 5.44182e-08H7.07743L16.1917 16.9848L17.6334 14.3096C17.7007 14.1882 18.3772 13.1826 17.7042 12.067ZM9.67036 10.3404L5.57905 2.75112L1.48775 10.3404H9.67036Z" fill="#F9B215"/>
</svg>    
            {props.data.games_count} Games 
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
<path d="M7.48823 3.50556C5.58235 3.50556 4.05294 4.89957 4.05294 6.58927C4.05294 8.30009 5.60588 9.67297 7.48823 9.67297C9.39412 9.67297 10.9235 8.27897 10.9235 6.58927C10.9235 4.89957 9.39412 3.50556 7.48823 3.50556ZM7.74706 7.39188L6.97059 8.08888L6.19412 7.39188L5.44118 6.716L6.21765 6.01899L6.97059 6.69487L8.75882 5.08966L9.53529 5.78666L7.74706 7.39188ZM14.3588 5.7233C14.0529 5.46984 13.9353 5.06854 14.1 4.7306L14.2412 4.41378C14.4765 3.92799 14.1706 3.37884 13.6059 3.23099L13.2294 3.1465C12.8294 3.0409 12.5471 2.72408 12.5235 2.34389V1.98483C12.5 1.4568 11.9588 1.07662 11.3941 1.1611L11.0176 1.22447C10.5941 1.28783 10.1941 1.11886 10.0059 0.78092L9.81765 0.485222C9.53529 0.0205545 8.87647 -0.106173 8.40588 0.189525L8.1 0.379616C7.77059 0.590829 7.3 0.590829 6.97059 0.379616L6.66471 0.168403C6.19412 -0.148416 5.51177 -0.000566768 5.22941 0.464101L5.04118 0.759799C4.82941 1.09774 4.42941 1.26671 4.00588 1.20335L3.62941 1.13998C3.04118 1.0555 2.52353 1.43568 2.47647 1.96371L2.45294 2.30165C2.42941 2.68183 2.14706 2.99865 1.74706 3.10426L1.37059 3.20987C0.805882 3.35771 0.5 3.90687 0.735294 4.39266L0.87647 4.70948C1.04118 5.04742 0.923529 5.44872 0.617647 5.70218L0.335294 5.93451C-0.111765 6.27245 -0.111765 6.90609 0.335294 7.24403L0.617647 7.47636C0.923529 7.72982 1.04118 8.13112 0.87647 8.46906L0.735294 8.78588C0.5 9.27167 0.805882 9.82082 1.37059 9.96867L1.74706 10.0532C2.14706 10.1588 2.42941 10.4756 2.45294 10.8558L2.47647 11.1937C2.5 11.7217 3.04118 12.1019 3.60588 12.0174L3.98235 11.9541C4.40588 11.8907 4.80588 12.0597 4.99412 12.3976L5.18235 12.6933C5.46471 13.158 6.12353 13.2847 6.59412 12.989L6.9 12.7989C7.22941 12.5877 7.7 12.5877 8.02941 12.7989L8.33529 13.0101C8.80588 13.327 9.48824 13.1791 9.77059 12.7144L9.95882 12.4187C10.1706 12.0808 10.5706 11.9118 10.9941 11.9752L11.3706 12.0386C11.9588 12.123 12.4765 11.7429 12.5235 11.2148L12.5471 10.8769C12.5706 10.4967 12.8529 10.1799 13.2529 10.0743L13.6294 9.98979C14.1941 9.84194 14.5 9.29279 14.2647 8.807L14.1235 8.49018C13.9588 8.15224 14.0765 7.75094 14.3824 7.49748L14.6647 7.26515C15.1118 6.92721 15.1118 6.29357 14.6647 5.95563L14.3588 5.7233ZM7.48823 10.8769C4.85294 10.8769 2.73529 8.95485 2.73529 6.61039C2.73529 4.24481 4.87647 2.34389 7.48823 2.34389C10.1235 2.34389 12.2412 4.26593 12.2412 6.61039C12.2412 8.95485 10.1235 10.8769 7.48823 10.8769ZM0.1 18.3116L2.40588 13.1369C2.71176 13.2636 3.06471 13.3481 3.41765 13.3481C3.55882 13.3481 3.7 13.327 3.84118 13.3058H3.88824L3.91176 13.3481C4.31176 14.024 5.13529 14.4464 6.02941 14.4464C6.26471 14.4464 6.52353 14.4041 6.73529 14.3408L4.31176 19.8112C4.24118 19.9802 3.98235 20.0013 3.88824 19.8323L2.73529 18.0159C2.68824 17.9525 2.61765 17.9314 2.54706 17.9525L0.382353 18.565C0.194117 18.6284 0.0294118 18.4594 0.1 18.3116ZM10.6647 19.8745L8.21765 14.383C8.45294 14.4464 8.68824 14.4886 8.92353 14.4886C9.81765 14.4886 10.6176 14.0662 11.0412 13.3692L11.0647 13.327H11.1118C11.2529 13.3481 11.3941 13.3692 11.5353 13.3692C11.9118 13.3692 12.2412 13.2847 12.5706 13.158L14.8765 18.3749C14.9471 18.5439 14.7824 18.7129 14.5941 18.6495L12.4294 18.037C12.3588 18.0159 12.2882 18.037 12.2412 18.1004L11.0882 19.9168C10.9941 20.0435 10.7353 20.0224 10.6647 19.8745Z" fill="#F9B215"/>
</svg>    
            {props.data.certificate_count} Certificate
            </div>
          </div>
          <div className={classes.partE}>
            <button>Buy Course</button>
            </div>
        </div>
    )
}