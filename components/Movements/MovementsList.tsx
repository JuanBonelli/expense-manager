import React, { ReactElement, useEffect, useState } from "react";
import Card from "../Card";
import { Movement } from "@/utils/types";
import SkeletonList from "../SkeletonList";

interface MovementResponse {
  data: Movement[];
}

const MovementsList = (): ReactElement => {
  const [movements, setMovements] = useState<Movement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getMovements();
  }, []);

  const getMovements = async () => {
    setLoading(true);
    fetch(
      `http://localhost:3000/api/account/${"67d83129c3545ad022a96e84"}/movement`,
    )
      .then((res: any) => res.json())
      .then((res: MovementResponse) => {
        setMovements(res.data);
        setLoading(false);
      });
  };

  var movementsCards: ReactElement[] = [];
  movements.forEach((movement: Movement) => {
    movementsCards.push(
      <Card
        key={movement._id}
        id={movement._id}
        navigationUrl={`/account/${movement.accountId}/movements/${movement._id}`}
        title={movement.title}
        subtitle={movement.amount}
        creationDate={movement.createdAt}
        categoryId={movement.categoryId}
      />,
    );
  });

  return !loading ? (
    <div className="flex w-full flex-col gap-4">{movementsCards}</div>
  ) : (
    <SkeletonList />
  );
};

export default MovementsList;
