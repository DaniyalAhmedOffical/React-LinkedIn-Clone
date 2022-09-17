import React from "react";
import "../src/css/widget.css";
import InfoIcon from "@mui/icons-material/Info";
function Widget() {
  return (
    <div className="widget">
      <div className="widget-top">
        <div className="widget-header">
          <h4>LinkedIn News</h4>
          <InfoIcon />
        </div>
        <div className="widget-body">
          <ul className="widget-options">
            <li>
              <h4>Slaying Job Search Fees</h4>
              <p>6d ago * 4,55 readers</p>
            </li>

            <li>
              <h4>Slaying Job Search Fees</h4>
              <p>5d ago * 4,45 readers</p>
            </li>

            <li>
              <h4>Slaying Job Search Fees</h4>
              <p>2d ago * 4,75 readers</p>
            </li>

            <li>
              <h4>Slaying Job Search Fees</h4>
              <p>3d ago * 4,85 readers</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="widget-bottom">
        <div className="widget-header">
            <h4>Today Tops Courses</h4>
            <InfoIcon/>
        </div>
        <div className="widget-body">
            <ul className="widget-options">
                <li>
                    <h4>Leading with a heavy heat</h4>
                    <p>Key Coly</p>
                </li>

                <li>
                    <h4>building  Resillience</h4>
                    <p>Taitnan Kolovau</p>
                </li>
                
            <li>
              <h4>Slaying Job Search Fees</h4>
              <p>3d ago * 4,85 readers</p>
            </li>

            
            <li>
              <h4>Slaying Job Search Fees</h4>
              <p>3d ago * 4,85 readers</p>
            </li>

            
            <li>
              <h4>Slaying Job Search Fees</h4>
              <p>3d ago * 4,85 readers</p>
            </li>

            </ul>
        </div>

      </div>
    </div>
  );
}

export default Widget;
