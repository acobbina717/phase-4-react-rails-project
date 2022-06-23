import React from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";

const CourseItems = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <Grid xs={6} sm={3} key={course.id}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={course.image}
                objectFit="cover"
                width="100%"
                height={140}
                alt={course.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{course.title}</Text>
                <Text
                  css={{
                    color: "$accents7",
                    fontWeight: "$semibold",
                    fontSize: "$sm",
                  }}
                >
                  {course.price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default CourseItems;
