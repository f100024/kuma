// Generated by tools/policy-gen.
// Run "make generate" to update this file.

// nolint:whitespace
package v1alpha1

import (
	_ "embed"
	"fmt"

	"k8s.io/kube-openapi/pkg/validation/spec"
	"sigs.k8s.io/yaml"

	"github.com/kumahq/kuma/pkg/core/resources/model"
)

//go:embed schema.yaml
var rawSchema []byte

func init() {
	var schema spec.Schema
	if err := yaml.Unmarshal(rawSchema, &schema); err != nil {
		panic(err)
	}
	rawSchema = nil
	MeshRateLimitResourceTypeDescriptor.Schema = &schema
}

const (
	MeshRateLimitType model.ResourceType = "MeshRateLimit"
)

var _ model.Resource = &MeshRateLimitResource{}

type MeshRateLimitResource struct {
	Meta model.ResourceMeta
	Spec *MeshRateLimit
}

func NewMeshRateLimitResource() *MeshRateLimitResource {
	return &MeshRateLimitResource{
		Spec: &MeshRateLimit{},
	}
}

func (t *MeshRateLimitResource) GetMeta() model.ResourceMeta {
	return t.Meta
}

func (t *MeshRateLimitResource) SetMeta(m model.ResourceMeta) {
	t.Meta = m
}

func (t *MeshRateLimitResource) GetSpec() model.ResourceSpec {
	return t.Spec
}

func (t *MeshRateLimitResource) SetSpec(spec model.ResourceSpec) error {
	protoType, ok := spec.(*MeshRateLimit)
	if !ok {
		return fmt.Errorf("invalid type %T for Spec", spec)
	} else {
		if protoType == nil {
			t.Spec = &MeshRateLimit{}
		} else {
			t.Spec = protoType
		}
		return nil
	}
}

func (t *MeshRateLimitResource) Descriptor() model.ResourceTypeDescriptor {
	return MeshRateLimitResourceTypeDescriptor
}

func (t *MeshRateLimitResource) Validate() error {
	if v, ok := interface{}(t).(interface{ validate() error }); !ok {
		return nil
	} else {
		return v.validate()
	}
}

var _ model.ResourceList = &MeshRateLimitResourceList{}

type MeshRateLimitResourceList struct {
	Items      []*MeshRateLimitResource
	Pagination model.Pagination
}

func (l *MeshRateLimitResourceList) GetItems() []model.Resource {
	res := make([]model.Resource, len(l.Items))
	for i, elem := range l.Items {
		res[i] = elem
	}
	return res
}

func (l *MeshRateLimitResourceList) GetItemType() model.ResourceType {
	return MeshRateLimitType
}

func (l *MeshRateLimitResourceList) NewItem() model.Resource {
	return NewMeshRateLimitResource()
}

func (l *MeshRateLimitResourceList) AddItem(r model.Resource) error {
	if trr, ok := r.(*MeshRateLimitResource); ok {
		l.Items = append(l.Items, trr)
		return nil
	} else {
		return model.ErrorInvalidItemType((*MeshRateLimitResource)(nil), r)
	}
}

func (l *MeshRateLimitResourceList) GetPagination() *model.Pagination {
	return &l.Pagination
}

var MeshRateLimitResourceTypeDescriptor = model.ResourceTypeDescriptor{
	Name:                MeshRateLimitType,
	Resource:            NewMeshRateLimitResource(),
	ResourceList:        &MeshRateLimitResourceList{},
	Scope:               model.ScopeMesh,
	KDSFlags:            model.FromGlobalToZone,
	WsPath:              "meshratelimits",
	KumactlArg:          "meshratelimit",
	KumactlListArg:      "meshratelimits",
	AllowToInspect:      true,
	IsPolicy:            true,
	IsExperimental:      false,
	SingularDisplayName: "Mesh Rate Limit",
	PluralDisplayName:   "Mesh Rate Limits",
	IsPluginOriginated:  true,
	IsTargetRefBased:    true,
	HasToTargetRef:      false,
	HasFromTargetRef:    true,
}
