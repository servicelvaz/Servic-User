import React, { memo, useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";

import Product from "../models/Product";

import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const uid = auth().currentUser.uid;
  // console.log("UID: " + uid);

  // Handle snapshot response
  const onSnapshot = snapshot => {
    console.log("Snapshot: " + snapshot.val());
    const list = [];

    //Create our own array of products in order
    snapshot.forEach(product => {
      console.log("Key: " + product.key)

      list.push(
        new Product(
          product.child("prod_date").val(),
          product.child("prod_image").val(),
          product.child("prod_name").val()
        )
      );
    });

    setProducts(list);
    setLoading(false);
  };

  useEffect(() => {
    // Create reference
    const ref = database().ref(`/users/` + uid + "/Products/");
    ref.once("value", onSnapshot);
  }, [uid]);

  if (loading) {
    return <Text>Loading products...</Text>;
  }

  return (
    <View>
      <Text>This is the dashboard screen</Text>
      {/* <FlatList
        data={products}
        renderItem={({ item }) => <Text>{item.prod_name}</Text>}
      /> */}

      {products.map(productt => (
        <View>
          <Text>{productt.prod_date}</Text>
          <Text>{productt.prod_image}</Text>
          <Text>{productt.prod_name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Dashboard;
