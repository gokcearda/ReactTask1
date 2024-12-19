import React from "react";
import "./TaskForm.css";

function TaskForm() {
    return (
        <div className="form-container">
            <div className="form-box">
                <form>
                    <div className="form-group">
                        <label htmlFor="form_purpose" className="form-label">
                            Purpose:
                        </label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="form_purpose" value="client" />
                                Client
                            </label>
                            <label>
                                <input type="radio" name="form_purpose" value="group" />
                                Group
                            </label>
                            <label>
                                <input type="radio" name="form_purpose" value="agent" />
                                Agent
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="form_label" className="form-label">
                            Label:
                        </label>
                        <input
                            type="text"
                            id="form_label"
                            name="form_label"
                            className="form-input"
                        />
                        <p className="form-helper">Please write label to here.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="form_key" className="form-label">
                            Key:
                        </label>
                        <input
                            type="text"
                            id="form_key"
                            name="form_key"
                            className="form-input"
                        />
                        <p className="form-helper">Please write key to here.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="form_status" className="form-label">
                            Status:
                        </label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="form_status" value="active" />
                                Active
                            </label>
                            <label>
                                <input type="radio" name="form_status" value="passive" />
                                Passive
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="save-button">
                            <i className="fas fa-save"></i> Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TaskForm;
