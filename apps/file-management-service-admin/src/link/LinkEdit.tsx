import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { FileTitle } from "../file/FileTitle";

export const LinkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="expiryDate" source="expiryDate" />
        <ReferenceInput source="file.id" reference="File" label="File">
          <SelectInput optionText={FileTitle} />
        </ReferenceInput>
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="linkUrl" source="linkUrl" />
      </SimpleForm>
    </Edit>
  );
};
