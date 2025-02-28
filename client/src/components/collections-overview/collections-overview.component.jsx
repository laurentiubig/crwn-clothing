import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collections-overview.styles.scss";
import { selectCollections, selectCollectionsForPreview } from "../../redux/shop/shop.selector.js";
import { createStructuredSelector } from "reselect";



const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  });

export default connect(mapStateToProps)(CollectionsOverview);
