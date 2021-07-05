import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deletedItem } from "../../redux/actions";
import styles from "./ContactListStyles.module.css";

const ContactList = ({ items, handleDelete }) => {
  return (
    <ul className={styles.contacts}>
      {items.map((contact) => (
        <li className={styles.list} key={contact.id}>
          {contact.name} : {contact.number}
          {
            <button
              type="button"
              name="delete"
              onClick={() => handleDelete(contact.id)}
              className={styles.listBtn}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  const { items, filter } = state;

  const formattedFilter = filter.toLowerCase().trim();
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(formattedFilter)
  );
  return {
    items: filteredItems,
  };
};

const mapDispatchToProps = {
  handleDelete: deletedItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
