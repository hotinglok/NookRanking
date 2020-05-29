import React, { useState } from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import './VillagerRanker.css';
import IslanderCard from '../IslanderCard/IslanderCard'

const VillagerRanker = ({ data }) => {

  const [items, setItems] = useState(data);

  const SortableItem = SortableElement(({villager}) =>
    <IslanderCard
      name={villager.name_en}
      imageHref={`${process.env.PUBLIC_URL}/assets/villager-icon/${villager.name_en.split(' ').join('_')}.png`}
    />
  );

  const SortableList = SortableContainer(({items}) => {
    return (
      <div className="villager-ranker">
        {items.map((value, i) => (
          <SortableItem
            key={`item-${value.name_en}`}
            index={i}
            villager={value} />
        ))}
      </div>
    )
  });

  const onSortEnd = ({oldIndex, newIndex}) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <SortableList
      items={items}
      onSortEnd={onSortEnd}
      axis={"xy"}
      useWindowAsScrollContainer={true}
    />
  );
}

export default VillagerRanker;
