import React from 'react';
import { Link } from 'react-router';


const NewPlaylist = function (props) {
  return (
  <div className="well">
    <form className="form-horizontal"  onSubmit={props.handleSubmit}>
      <fieldset>
        <legend>New Playlist</legend>
        <div className="form-group">
          <label className="col-xs-2 control-label">Name</label>
          <div className="col-xs-10">
            <input className="form-control" onChange={props.handleChange}  value={props.value} name="playIn" type="text"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-10 col-xs-offset-2">
            <button type="submit" className="btn btn-success" disabled={props.disableButton()} >Create Playlist</button>
             </div>
          </div>

        <div>
        { props.disableButton() ?
          <div className="alert alert-warning">
            <span>
              {console.log(props.value.length)}
               'Please enter a name'
            </span>
          </div>
          : null
        }

      </div>
      </fieldset>
    </form>
  </div>
)}

export default NewPlaylist;
