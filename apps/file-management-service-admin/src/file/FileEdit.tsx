import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LinkTitle } from "../link/LinkTitle";
import { UserTitle } from "../user/UserTitle";

export const FileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="filename" source="filename" />
        <TextInput label="fileType" source="fileType" />
        <TextInput label="fileUrl" source="fileUrl" />
        <ReferenceArrayInput
          source="links"
          reference="Link"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LinkTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="uploadedAt" source="uploadedAt" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
