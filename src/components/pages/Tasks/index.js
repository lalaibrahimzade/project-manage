import React from "react";
import { Card, Button, Row, Col } from "antd";
import {FormOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { setVisibleAddModal } from "../../../redux/actions";
import { connect } from "react-redux";
import DragList from "./DragList";
import Modal from "antd/es/modal/Modal";
import AddModal from "./AddModal";

const Tasks = ({ setVisibleAddModal, user, modalData }) => {

    const showModal = () => {
        setVisibleAddModal(true, null, {});
    };

    return (
        <div>
            <Row gutter={[10, 10]}>
                <Col xs={24}>
                    <div className="border animated fadeInDown p-2 mt-0 bg-white tasks-header">
                        <div>
                            <FormOutlined className="mr5-15" style={{fontSize:"30px", color:"#635fc7"}} />
                            <span className="f-20 ms-3" style={{fontWeight:"500", color:"#635fc7", fontSize:"20px"}}>Tasks</span>
                        </div>
                        <div>
                           <Button onClick={showModal} type={"primary"} disabled={!user.role.addTask} className="add-task-btn">
                                Add Task
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col lg={24} xs={24}>
                    <Card className={"animated fadeIn"}>
                        <DragList />
                    </Card>
                </Col>
            </Row>

            <Modal
                title={modalData.editing ? "Edit" : "Add task"}
                centered
                open={modalData.modalOpen}
                className="padModal"
                onOk={() => setVisibleAddModal(false)}
                onCancel={() => {
                    setVisibleAddModal(false);
                }}
                footer={null}
            >
                <AddModal />
            </Modal>
        </div>
    );
};

const mapStateToProps = ({ modalData, user }) => {
    return {
        modalData,
        user: user.companyData
    };
};

export default connect(mapStateToProps, { setVisibleAddModal })(Tasks);
